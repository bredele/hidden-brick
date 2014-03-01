# hidden-brick

  [Lego](https://github.com/bredele/lego) plugin to hide/show dom elements. 

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/hidden-brick

with [nodejs](http://nodejs.org):

    $ component install hidden-brick

## Usage

First, add the plugin to your view (see [lego](https://github.com/bredele/lego) to know more about views):

```js
view.add('hide', require('hidden-brick'));
```

## Basic


```html
<span hide="bool">hide on truethy</span>
<span hide="!bool">show on truethy</span>
```

  Listen changes on `bool` attribute of lego's view and apply `hidden` class.

see [live example](https://github.com/bredele/hidden-brick/tree/master/example)

## License

  MIT