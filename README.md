# prevent_mobile_landscape

NPM Package to prevent mobile viewing while in landscape orienation

[![Build Status](https://travis-ci.org/stevemkroll/prevent_mobile_landscape.svg?branch=master)](https://travis-ci.org/stevemkroll/prevent_mobile_landscape)

![prevent_mobile_landscape](/images/screenshot.png)

## Installation
```
npm install prevent_mobile_landscape
```
## Usage
import the package to your main js file
```
import { prevent_mobile_landscape } from 'prevent_mobile_landscape';
```

### Basic
call the function

```
prevent_mobile_landscape({});
```

### Customize
edit the visuals with these parameters

```   
  background_color: 
  text_color:
  font:
  font_size: 
  text:
```

default values

```
prevent_mobile_landscape({
  background_color: 'linear-gradient(-90deg, #D77C7C, #AD71BC)',
  text_color: '#eee',
  font: 'Montserrat-Thin',
  font_size: '20px',
  text: 'Sorry, this device orientation is not supported'
});
```

That's it... you should be good to go :shipit: :thumbsup: