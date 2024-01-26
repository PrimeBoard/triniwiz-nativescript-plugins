
declare class STPTelemetryClient extends NSObject {

	static alloc(): STPTelemetryClient; // inherited from NSObject

	static new(): STPTelemetryClient; // inherited from NSObject
}

declare var StripeApplePayVersionNumber: number;

declare var StripeApplePayVersionString: interop.Reference<number>;

declare class _stpinternal_APContextSwift extends NSObject implements PKPaymentAuthorizationControllerDelegate {

	static alloc(): _stpinternal_APContextSwift; // inherited from NSObject

	static new(): _stpinternal_APContextSwift; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	paymentAuthorizationControllerDidAuthorizePaymentCompletion(controller: PKPaymentAuthorizationController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationStatus) => void): void;

	paymentAuthorizationControllerDidAuthorizePaymentHandler(controller: PKPaymentAuthorizationController, payment: PKPayment, completion: (p1: PKPaymentAuthorizationResult) => void): void;

	paymentAuthorizationControllerDidChangeCouponCodeHandler(controller: PKPaymentAuthorizationController, couponCode: string, completion: (p1: PKPaymentRequestCouponCodeUpdate) => void): void;

	paymentAuthorizationControllerDidFinish(controller: PKPaymentAuthorizationController): void;

	paymentAuthorizationControllerDidRequestMerchantSessionUpdate(controller: PKPaymentAuthorizationController, handler: (p1: PKPaymentRequestMerchantSessionUpdate) => void): void;

	paymentAuthorizationControllerDidSelectPaymentMethodCompletion(controller: PKPaymentAuthorizationController, paymentMethod: PKPaymentMethod, completion: (p1: NSArray<PKPaymentSummaryItem>) => void): void;

	paymentAuthorizationControllerDidSelectPaymentMethodHandler(controller: PKPaymentAuthorizationController, paymentMethod: PKPaymentMethod, completion: (p1: PKPaymentRequestPaymentMethodUpdate) => void): void;

	paymentAuthorizationControllerDidSelectShippingContactCompletion(controller: PKPaymentAuthorizationController, contact: PKContact, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKShippingMethod>, p3: NSArray<PKPaymentSummaryItem>) => void): void;

	paymentAuthorizationControllerDidSelectShippingContactHandler(controller: PKPaymentAuthorizationController, contact: PKContact, completion: (p1: PKPaymentRequestShippingContactUpdate) => void): void;

	paymentAuthorizationControllerDidSelectShippingMethodCompletion(controller: PKPaymentAuthorizationController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentAuthorizationStatus, p2: NSArray<PKPaymentSummaryItem>) => void): void;

	paymentAuthorizationControllerDidSelectShippingMethodHandler(controller: PKPaymentAuthorizationController, shippingMethod: PKShippingMethod, completion: (p1: PKPaymentRequestShippingMethodUpdate) => void): void;

	paymentAuthorizationControllerWillAuthorizePayment(controller: PKPaymentAuthorizationController): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentApplePayOnViewControllerCompletion(viewController: UIViewController, completion: () => void): void;

	presentationWindowForPaymentAuthorizationController(controller: PKPaymentAuthorizationController): UIWindow;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class _stpinternal_ApplePayContextDidCompleteStorage extends NSObject {

	static alloc(): _stpinternal_ApplePayContextDidCompleteStorage; // inherited from NSObject

	static new(): _stpinternal_ApplePayContextDidCompleteStorage; // inherited from NSObject
}

declare class _stpinternal_ApplePayContextDidCreatePaymentMethodStorage extends NSObject {

	static alloc(): _stpinternal_ApplePayContextDidCreatePaymentMethodStorage; // inherited from NSObject

	static new(): _stpinternal_ApplePayContextDidCreatePaymentMethodStorage; // inherited from NSObject
}

interface _stpinternal_STPApplePayContextDelegateBase extends NSObjectProtocol {

	applePayContextDidSelectShippingContactHandler?(context: _stpinternal_APContextSwift, contact: PKContact, handler: (p1: PKPaymentRequestShippingContactUpdate) => void): void;

	applePayContextDidSelectShippingMethodHandler?(context: _stpinternal_APContextSwift, shippingMethod: PKShippingMethod, handler: (p1: PKPaymentRequestShippingMethodUpdate) => void): void;

	applePayContextWillCompleteWithResultHandler?(context: _stpinternal_APContextSwift, authorizationResult: PKPaymentAuthorizationResult, handler: (p1: PKPaymentAuthorizationResult) => void): void;
}
declare var _stpinternal_STPApplePayContextDelegateBase: {

	prototype: _stpinternal_STPApplePayContextDelegateBase;
};
