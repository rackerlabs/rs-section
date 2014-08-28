# rs-section

[![Build Status](http://img.shields.io/travis/rackerlabs/rs-section/master.svg)](https://travis-ci.org/rackerlabs/rs-section)
[![Code Climate](http://img.shields.io/codeclimate/github/rackerlabs/rs-section.svg)](https://codeclimate.com/github/rackerlabs/rs-section)
[![Coverage](http://img.shields.io/codeclimate/coverage/github/rackerlabs/rs-section.svg)](https://codeclimate.com/github/rackerlabs/rs-section)

Angular directive for [Canon](http://rackerlabs.github.io/canon) sections featuring:

- Expanded, Collapsed, and Loading States
- Full Keyboard Support
- Accessibility Support

## Requirements

- AngularJS v1.2 or higher
- Canon v1.1 or higher

## Installation

This package is not currently published to either NPM or Bower. Once the API
stabilizes, the built files will be published. Until then, you can install 
directly from the GitHub repository.

To install with Bower, add the following line to dependencies in your bower.json:

```
"rs-section": "https://github.com/rackerlabs/rs-section.git"
```

## Usage

This package provides a single directive, `rs-section`, that can be used as an 
element or an attribute.

```
<rs-section title="Directive Demo" description="A description of my section." collapsible="expanded">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</rs-section>
```

### Attributes

#### `title`

Type: `String`, Required

Accepts any string to be rendered into the header of the section. This attribute
is required.

#### `description`

Type: `String`, Default: `''`

Accepts any string to be rendered next to the title of the section. The 
description is only shown when the section is collapsed. This attribute is 
optional.

#### `collapsible`

Type: `String`, Default: `'expanded'`

Turns the section into a collapsible section. This parameters accepts the default
state of the as a value. 

- `collapsible="expanded"` - Render a collapsible section that is expanded by default.
- `collapsible="collapsed"` - Render a collapsible section that is collapsed by default.
- `collapsible="loading"` - Render a collapsible section that shows a loading pattern.

If the state is omitted, the section defaults to expanded. This attribute is optional.

## License

rs-section is released under the [MIT License](LICENSE).

