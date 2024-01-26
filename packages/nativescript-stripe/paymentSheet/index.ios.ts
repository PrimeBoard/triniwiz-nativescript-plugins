import { Color, Frame, getRootLayout } from "@nativescript/core";
import { Configuration } from ".";
declare const TNSStripe;
export class PaymentSheet {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	static _init(context) {}

    static #getConfig(config?: Configuration) {
		const cfg = config || null;

        if (cfg.primaryButtonColor) {
            if (cfg.primaryButtonColor instanceof Color) {
                cfg.primaryButtonColor = cfg.primaryButtonColor.ios;
            } else if (typeof config.primaryButtonColor === 'string') {
                cfg.primaryButtonColor = new Color(config.primaryButtonColor).ios;
            }
        }

        return cfg;
    }

    static presentWithSetupIntent(setupIntent: string, config?: Configuration) {
        return new Promise<void>((resolve, reject) => {
            const rootVC = this.findTopViewController(Frame.topmost().currentPage.ios) || this._rootViewController;

            TNSStripe.presentWithSetupIntent(setupIntent, this.#getConfig(config), rootVC, (status, error) => {
                switch (status) {
					case 'completed':
                        resolve();
                        break;
					case 'cancelled':
						reject(new Error('cancelled'));
                        break;
					case 'error':
						// eslint-disable-next-line no-case-declarations
                        const err = new Error(error.localizedDescription);
                        (err as any).native = error;
						reject(err);
                        break;
                    default:
                        reject(new Error('unknown'));
                        break;
                }
            });
		});
    }

    static presentWithPaymentIntent(paymentIntent: string, config?: Configuration) {
        return new Promise<void>((resolve, reject) => {
            const rootVC = this.findTopViewController(Frame.topmost().currentPage.ios) || this._rootViewController;
            TNSStripe.presentWithPaymentIntent(paymentIntent, this.#getConfig(config), rootVC, (status, error) => {
                switch (status) {
					case 'completed':
                        resolve();
                        break;
					case 'cancelled':
						reject(new Error('cancelled'));
                        break;
					case 'error':
						// eslint-disable-next-line no-case-declarations
                        const err = new Error(error.localizedDescription);
                        (err as any).native = error;
						reject(err);
                        break;
                    default:
                        reject(new Error('unknown'));
                        break;
                }
            });
		});
    }

    private static get _rootViewController(): UIViewController | undefined {
        const keyWindow = UIApplication.sharedApplication.keyWindow;
        return keyWindow != null ? keyWindow.rootViewController : undefined;
    }

    private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const rootLayout = getRootLayout();
		if (rootLayout && rootLayout.viewController) {
			return rootLayout.viewController;
		}
        const presented = root.presentedViewController;
        if (presented != null) {
            return this.findTopViewController(presented);
        }
        if (root instanceof UISplitViewController) {
            const last = root.viewControllers.lastObject;
            if (last == null) {
                return root;
            }
            return this.findTopViewController(last);
        } else if (root instanceof UINavigationController) {
            const top = root.topViewController;
            if (top == null) {
                return root;
            }
            return this.findTopViewController(top);
        } else if (root instanceof UITabBarController) {
            const selected = root.selectedViewController;
            if (selected == null) {
                return root;
            }
            return this.findTopViewController(selected);
        } else {
            return root;
        }
    }
}
