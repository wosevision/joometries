# Joometries

>"**Joometries** make geoJSON geometry more sane for humans!"

[![Travis build status](http://img.shields.io/travis/wosevision/joometries.svg?style=flat)](https://travis-ci.org/wosevision/joometries)
[![Code Climate](https://codeclimate.com/github/wosevision/joometries/badges/gpa.svg)](https://codeclimate.com/github/wosevision/joometries)
[![Test Coverage](https://codeclimate.com/github/wosevision/joometries/badges/coverage.svg)](https://codeclimate.com/github/wosevision/joometries)
[![Dependency Status](https://david-dm.org/wosevision/joometries.svg)](https://david-dm.org/wosevision/joometries)
[![devDependency Status](https://david-dm.org/wosevision/joometries/dev-status.svg)](https://david-dm.org/wosevision/joometries#info=devDependencies)

## Why?

**GeoJSON** was a totally rad much-needed standardization of geographical data for the purpose of universal cartographical display, and I think most of us could agree. I think we can also agree that arrays inside arrays 4+ levels deep can be very tricky to wrangle in the wild.

GeoJSON made parsing geometry a breeze for map software – but what about the humans that need to design input controls and content management systems *for* that geometry? It would be just lovely if any given user-generated value came in the form of (and could be stored in a database as):

```JavaScript
const pristineFormatting =
	[
		[
			[ 11, 22, 33 ],
			[ 11, 22, 33 ]
		]
	]
```

...but more often than not, they'll be coming in like this:

```JavaScript
let stringRiddledAndFlat =
	[
		[ "11", "22", "33" ],
		[ "11", "22", "33" ]
	]
```

...or worse yet, this:

```JavaScript
var creativeDevs =
	new Object({
		"who": [ "11 , 22,   33" ],
		"knows": [ "11, 22,33" ],
		"what": [ 11, 22, "33" ]
	})
```

...or heaven forbid, these shenanigans:

```JavaScript
const whatMostDBsLookLike = 
[{
	lat: 11, lng: 22, dep: 33
},{
	lat: 11, lng: 22, dep: 33
}]
```

**Joometries** are wee little classes to transmogrify a vivid range of number/string/array/mixup combos into valid geoJSON geometries. If there's one thing the average CMS excels at, it's manipulating and storing text-as-strings-as-text, so why work against the grain when you can do this...

```
const polygon = new Polygon([ 
	"2.812500,66.861082,0.0 
	2.636719,62.593341,0.0 
	16.523438,62.754726,0.0",
	"-23.906250,54.572062,0.0 
	-22.851563,52.802761,0.0 
	-17.929688,53.852527,0.0"
]);
```

...and get *this goodness!*
```
[
	[
		[2.812500,66.861082,0.0],
		[2.636719,62.593341,0.0],
		[16.523438,62.754726,0.0]
	], [
		...allThatJazz
	]
]
```