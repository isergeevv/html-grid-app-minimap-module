class ElementData {
    constructor(element) {
        this._element = element;
    }
    has(key) {
        return this._element.hasAttribute(`data-${key}`);
    }
    get(key) {
        return this._element.getAttribute(`data-${key}`);
    }
    set(key, value = '') {
        this._element.setAttribute(`data-${key}`, value);
    }
    remove(key) {
        this._element.removeAttribute(`data-${key}`);
    }
    toggle(key, value) {
        if (value) {
            this.set(key);
        }
        else {
            this.remove(key);
        }
    }
}

class GridAppModule {
    constructor(app, config) {
        this._app = app;
        this._element = document.createElement('div');
        this._element.gridAppInstance = this;
        this._data = new ElementData(this._element);
        this.element.classList.add('app-module');
        this.element.dataset['label'] = config.label;
    }
    get app() {
        return this._app;
    }
    get element() {
        return this._element;
    }
    get data() {
        return this._data;
    }
    get label() {
        const label = this._data.get('label');
        if (!label) {
            throw new Error('Module label is not set.');
        }
        return label;
    }
}

var CONNECTOR_TYPES;
(function (CONNECTOR_TYPES) {
    CONNECTOR_TYPES["INPUT"] = "input";
    CONNECTOR_TYPES["OUTPUT"] = "output";
})(CONNECTOR_TYPES || (CONNECTOR_TYPES = {}));
var RESIZE_TYPES;
(function (RESIZE_TYPES) {
    RESIZE_TYPES["LEFT"] = "left";
    RESIZE_TYPES["RIGHT"] = "right";
    RESIZE_TYPES["TOP"] = "top";
    RESIZE_TYPES["BOTTOM"] = "bottom";
})(RESIZE_TYPES || (RESIZE_TYPES = {}));

class GridAppMiniMap extends GridAppModule {
    constructor(app, config) {
        super(app, config);
        this.element.style.setProperty('--gridapp-minimap-bg-color', config.backgroundColor.join(', '));
    }
    onMouseDown(_e) { }
    onMouseMove(_e) { }
    onMouseUp(_e) { }
    onClick(_e) { }
    onWheelMove(_e) { }
    onKeyDown(_e) { }
    onKeyUp(_e) { }
    onContextMenu(_e) { }
    import(_data) { }
    export() {
        return {};
    }
}

export { GridAppMiniMap };
