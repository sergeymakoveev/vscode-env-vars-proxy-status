import * as vscode from 'vscode';

const envVarProxyNames = [
  'HTTP_PROXY',
  'HTTPS_PROXY',
  'ALL_PROXY',
  'NO_PROXY',
  'http_proxy',
  'https_proxy',
  'all_proxy',
  'no_proxy',
] as const;

type EnvVarProxy = (typeof envVarProxyNames)[number];

const envVarProxyStatuses = envVarProxyNames.reduce<Array<[EnvVarProxy, boolean]>>(
  (acc, value) => [...acc, [value, !!process.env[value]?.trim()]],
  [],
);

const isEnvVarsProxySettled = envVarProxyStatuses.every(([_, status]) => status);
const message = isEnvVarsProxySettled
  ? 'PROXY is settled'
  : `Lost: ${envVarProxyStatuses
      .filter(([_name, isSet]) => !isSet)
      .map(([name]) => name)
      .join(', ')}`;

export function activate(context: vscode.ExtensionContext): void {
  const statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

  statusItem.text = 'Proxy $(circle-filled)';
  statusItem.color = new vscode.ThemeColor(isEnvVarsProxySettled ? 'testing.iconPassed' : 'testing.iconFailed');
  statusItem.tooltip = message;
  statusItem.show();

  context.subscriptions.push(statusItem);
}

export function deactivate(): void {}
