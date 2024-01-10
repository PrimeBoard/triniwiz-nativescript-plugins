import { TextBase } from './common';

export class Text extends TextBase {
	_children: Text[] = [];
	get nativeView(): android.widget.TextView {
		return super.nativeView as android.widget.TextView;
	}
	_textParent: Text;
	_text: string;
	createNativeView(): Object {
		const label = new android.widget.TextView(this._context);
		return label;
	}

	initNativeView() {
		super.initNativeView();
	}

	_addChildFromBuilder(name: string, value: any): void {
		if (value instanceof Text) {
			this._children.push(value);
			this._textParent = this;
		}
	}

	_handleChildren() {
    const currentText = this.text || "";
		let newText = currentText;
		console.log(this._children);
		this._children.forEach(child =>{
      child._handleChildren()
		  newText = newText + (child.text || "")
		});
		if (newText !== currentText) {
			this._text = newText;
		} else {
			this._text = currentText;
		}
	}

	onLoaded() {
		super.onLoaded();
		console.log('onLoaded', this);
		const currentText = this.text || "";
		let newText = currentText;
		this._children.forEach(child =>{
			console.log('child', child);
			child._handleChildren();
			console.log(child._text);
      newText = newText + (child._text || "")
		});
		if (newText !== currentText) {
			if (this.nativeView) {
				this.nativeView.setText(newText);
			}
		}
	}
}
