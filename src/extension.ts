require('source-map-support').install();

import Log, { LogLevel } from '@qml-debug/log';
import { QmlDebugAdapterFactory } from '@qml-debug/debug-adapter';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext)
{
	Log.trace('extension.activate', [ context ]);

    Log.instance().level = LogLevel.debug;

	// Register Commands
	context.subscriptions.push(
		vscode.commands.registerCommand('qml-debug.version',
			() =>
            {
				var pjson = require("@qml-debug-root/package.json");
				vscode.window.showInformationMessage("QML Debug Version: " + pjson.version);
			}
		),
		vscode.commands.registerCommand('qml-debug.copyright',
			() =>
            {
				vscode.window.showInformationMessage("QML Debug Copyright (C) 2021, Y. Orçun GÖKBULUT. All right reserved. " +
				"QML Debug and the accompanying materials are made available under the terms of GNU General Public License Version 3. " +
				"Full license text available at https://www.gnu.org/licenses/gpl-3.0.txt");
			}
		),
        vscode.debug.registerDebugAdapterDescriptorFactory("qml", new QmlDebugAdapterFactory()),
	);
}

export function deactivate()
{
    Log.trace('extension.deactivate', [ context ]);
}
