# [5.1.0](https://github.com/5app/base5-ui/compare/v5.0.0...v5.1.0) (2019-09-12)


### Features

* New Table component ([34d85da](https://github.com/5app/base5-ui/commit/34d85da))

# [5.0.0](https://github.com/5app/base5-ui/compare/v4.0.1...v5.0.0) (2019-09-10)


### Features

* New 'display' styling prop ([a861038](https://github.com/5app/base5-ui/commit/a861038))


### BREAKING CHANGES

* `display: block` is no longer
automatically applied when using the `overflow` or `textAlign`
styling props. Instead, the new `display` prop should be used to
give inline elements block-level layout

## [4.0.1](https://github.com/5app/base5-ui/compare/v4.0.0...v4.0.1) (2019-09-03)


### Bug Fixes

* Fix broken Button alignment after refactor ([d8089e5](https://github.com/5app/base5-ui/commit/d8089e5))

# [4.0.0](https://github.com/5app/base5-ui/compare/v3.11.0...v4.0.0) (2019-09-02)


### Bug Fixes

* lint Button refactor ([6600bc4](https://github.com/5app/base5-ui/commit/6600bc4))
* remove test for deprecated Button subline prop ([5649bab](https://github.com/5app/base5-ui/commit/5649bab))


### Code Refactoring

* Remove button subline prop ([79d3b98](https://github.com/5app/base5-ui/commit/79d3b98))


### BREAKING CHANGES

* Removes the underutilised subline prop
from the Button component to reduce layout complexity and allow
for nicer alignment of icons with multi-line button text.

# [3.11.0](https://github.com/5app/base5-ui/compare/v3.10.0...v3.11.0) (2019-09-02)


### Features

* **Time:** Add Time Component ([#18](https://github.com/5app/base5-ui/issues/18)) ([56aedb7](https://github.com/5app/base5-ui/commit/56aedb7))

# [3.10.0](https://github.com/5app/base5-ui/compare/v3.9.1...v3.10.0) (2019-08-30)


### Features

* New component ViewMoreText ([0f78209](https://github.com/5app/base5-ui/commit/0f78209))
* New Meter component ([59f51d6](https://github.com/5app/base5-ui/commit/59f51d6))

## [3.9.1](https://github.com/5app/base5-ui/compare/v3.9.0...v3.9.1) (2019-08-29)


### Bug Fixes

* Better content sizing logic for CenterContent ([137294c](https://github.com/5app/base5-ui/commit/137294c))

# [3.9.0](https://github.com/5app/base5-ui/compare/v3.8.2...v3.9.0) (2019-08-29)


### Features

* New useBreakpoints hook ([bcab7a3](https://github.com/5app/base5-ui/commit/bcab7a3))

## [3.8.2](https://github.com/5app/base5-ui/compare/v3.8.1...v3.8.2) (2019-08-27)


### Bug Fixes

* Add missing height for charts in IE11 ([88ffc28](https://github.com/5app/base5-ui/commit/88ffc28))

## [3.8.1](https://github.com/5app/base5-ui/compare/v3.8.0...v3.8.1) (2019-08-27)


### Bug Fixes

* Favor defined height in viewbox for IE11 ([f35cb6b](https://github.com/5app/base5-ui/commit/f35cb6b))

# [3.8.0](https://github.com/5app/base5-ui/compare/v3.7.2...v3.8.0) (2019-08-22)


### Features

* Pass ref's measurements to PopOver renderer ([7f0fbe6](https://github.com/5app/base5-ui/commit/7f0fbe6))

## [3.7.2](https://github.com/5app/base5-ui/compare/v3.7.1...v3.7.2) (2019-08-21)


### Bug Fixes

* Update popper.js for better PopOver positioning ([ff756d1](https://github.com/5app/base5-ui/commit/ff756d1))

## [3.7.1](https://github.com/5app/base5-ui/compare/v3.7.0...v3.7.1) (2019-08-21)


### Bug Fixes

* Subtler chart empty state messages ([8bb2074](https://github.com/5app/base5-ui/commit/8bb2074))

# [3.7.0](https://github.com/5app/base5-ui/compare/v3.6.2...v3.7.0) (2019-08-21)


### Features

* Add empty state to SimpleChart ([bd5b9f3](https://github.com/5app/base5-ui/commit/bd5b9f3))
* Add empty state to SimpleGauge ([96e36c7](https://github.com/5app/base5-ui/commit/96e36c7))

## [3.6.2](https://github.com/5app/base5-ui/compare/v3.6.1...v3.6.2) (2019-08-21)


### Bug Fixes

* Trigger release for previous commit ([0f57665](https://github.com/5app/base5-ui/commit/0f57665))

## [3.6.1](https://github.com/5app/base5-ui/compare/v3.6.0...v3.6.1) (2019-08-20)


### Bug Fixes

* Fix chart tooltip's name proptype ([0ab10dd](https://github.com/5app/base5-ui/commit/0ab10dd))
* Position tooltip on the chart's line ([6ae19be](https://github.com/5app/base5-ui/commit/6ae19be))
* Remove distance prop in chart tooltip ([63780e6](https://github.com/5app/base5-ui/commit/63780e6))

# [3.6.0](https://github.com/5app/base5-ui/compare/v3.5.1...v3.6.0) (2019-08-20)


### Features

* Add custom tooltips to SimpleChart ([f34fc87](https://github.com/5app/base5-ui/commit/f34fc87))
* New VisuallyHidden component for a11y ([9d918ee](https://github.com/5app/base5-ui/commit/9d918ee))

## [3.5.1](https://github.com/5app/base5-ui/compare/v3.5.0...v3.5.1) (2019-08-19)


### Bug Fixes

* Fix GaugeChart height calculation ([4381d62](https://github.com/5app/base5-ui/commit/4381d62))

# [3.5.0](https://github.com/5app/base5-ui/compare/v3.4.0...v3.5.0) (2019-08-16)


### Bug Fixes

* Remove obsolete app icons ([178c149](https://github.com/5app/base5-ui/commit/178c149))


### Features

* Added new icons NavUp, NavDown, Dot ([66b7b7c](https://github.com/5app/base5-ui/commit/66b7b7c))

# [3.4.0](https://github.com/5app/base5-ui/compare/v3.3.2...v3.4.0) (2019-08-15)


### Bug Fixes

* Remove broken iconMap import ([d7e1c1c](https://github.com/5app/base5-ui/commit/d7e1c1c))


### Features

* New components (SimpleChart & SimpleGauge) ([8491aef](https://github.com/5app/base5-ui/commit/8491aef))

## [3.3.2](https://github.com/5app/base5-ui/compare/v3.3.1...v3.3.2) (2019-08-14)


### Bug Fixes

* Consistently define mixins as objects ([4ce9be0](https://github.com/5app/base5-ui/commit/4ce9be0))

## [3.3.1](https://github.com/5app/base5-ui/compare/v3.3.0...v3.3.1) (2019-08-08)


### Bug Fixes

* **docs:** breaking docs deploy ([a8c025b](https://github.com/5app/base5-ui/commit/a8c025b))
* **docs:** publishing docs, reinstate fingerprint ([f480a26](https://github.com/5app/base5-ui/commit/f480a26))

# [3.3.0](https://github.com/5app/base5-ui/compare/v3.2.5...v3.3.0) (2019-08-07)


### Bug Fixes

* Moved Arrow component to its own component folder ([b159cea](https://github.com/5app/base5-ui/commit/b159cea))


### Features

* Add new icons: Calendar & Megaphone ([f5d1bc2](https://github.com/5app/base5-ui/commit/f5d1bc2))

## [3.2.5](https://github.com/5app/base5-ui/compare/v3.2.4...v3.2.5) (2019-08-06)


### Bug Fixes

* Fix broken secondary placement for Arrow ([afaa051](https://github.com/5app/base5-ui/commit/afaa051))

## [3.2.4](https://github.com/5app/base5-ui/compare/v3.2.3...v3.2.4) (2019-08-06)


### Bug Fixes

* Fix default positioning for Arrow component ([b664597](https://github.com/5app/base5-ui/commit/b664597))

## [3.2.3](https://github.com/5app/base5-ui/compare/v3.2.2...v3.2.3) (2019-07-18)


### Bug Fixes

* Allow 'stretch' for Flex align prop ([bdc3153](https://github.com/5app/base5-ui/commit/bdc3153))

## [3.2.2](https://github.com/5app/base5-ui/compare/v3.2.1...v3.2.2) (2019-07-18)


### Bug Fixes

* Fix ellipsis style missing display attribute ([0ccdd60](https://github.com/5app/base5-ui/commit/0ccdd60))

## [3.2.1](https://github.com/5app/base5-ui/compare/v3.2.0...v3.2.1) (2019-07-18)


### Bug Fixes

* Rename align prop on Flex component ([f00ae48](https://github.com/5app/base5-ui/commit/f00ae48))

# [3.2.0](https://github.com/5app/base5-ui/compare/v3.1.1...v3.2.0) (2019-07-18)


### Features

* Add CenterContent component ([20fd2a0](https://github.com/5app/base5-ui/commit/20fd2a0))

## [3.1.1](https://github.com/5app/base5-ui/compare/v3.1.0...v3.1.1) (2019-07-17)


### Bug Fixes

* Add border props to Flex component ([f196911](https://github.com/5app/base5-ui/commit/f196911))

# [3.1.0](https://github.com/5app/base5-ui/compare/v3.0.0...v3.1.0) (2019-07-17)


### Features

* Split spacingProps into margin/paddingProps ([56fa273](https://github.com/5app/base5-ui/commit/56fa273))

# [3.0.0](https://github.com/5app/base5-ui/compare/v2.1.0...v3.0.0) (2019-07-12)


* Maybe trigger v2 release? ([7ac95b6](https://github.com/5app/base5-ui/commit/7ac95b6))


### BREAKING CHANGES

* - Removes focusController, may have slightly different focus styles
- Added new core components Box, Flex, Text, PopOver, Portal

# [2.1.0](https://github.com/5app/base5-ui/compare/v2.0.1...v2.1.0) (2019-07-12)


### Bug Fixes

* **deploy:** config semantic-release ([3949f41](https://github.com/5app/base5-ui/commit/3949f41))
* **deploy:** config semantic-release ([563b456](https://github.com/5app/base5-ui/commit/563b456))
* **deploy:** config semantic-release ([92bb80f](https://github.com/5app/base5-ui/commit/92bb80f))
* **deploy:** config semantic-release ([4fd2c27](https://github.com/5app/base5-ui/commit/4fd2c27))
* **deploy:** config semantic-release ([a18bee3](https://github.com/5app/base5-ui/commit/a18bee3))
* **deploy:** config semantic-release ([166e860](https://github.com/5app/base5-ui/commit/166e860))
* **deploy:** config semantic-release ([5397fef](https://github.com/5app/base5-ui/commit/5397fef))
* **deploy:** config semantic-release ([84d8ba2](https://github.com/5app/base5-ui/commit/84d8ba2))
* **deploy:** config semantic-release ([efe5956](https://github.com/5app/base5-ui/commit/efe5956))
* **deploy:** copy README to npm package ([6adc257](https://github.com/5app/base5-ui/commit/6adc257))
* **deploy:** tidy config semantic-release ([a0153b5](https://github.com/5app/base5-ui/commit/a0153b5))
* **publish:** Docs ([cdecaf4](https://github.com/5app/base5-ui/commit/cdecaf4))
* **publish:** Only run on master branch ([929ed34](https://github.com/5app/base5-ui/commit/929ed34))
* **tests:** trigger a build pass eslint tests ([76ef815](https://github.com/5app/base5-ui/commit/76ef815))
* Deploy docs prior to versioning ([e0444bd](https://github.com/5app/base5-ui/commit/e0444bd))
* Fix docz publishing ([482e8a6](https://github.com/5app/base5-ui/commit/482e8a6))
* Fix docz publishing ([f9621a9](https://github.com/5app/base5-ui/commit/f9621a9))
* Fix issue with styled-components and prettier ([9b715b3](https://github.com/5app/base5-ui/commit/9b715b3))


### Features

* **auto-release:** Semantic release ([#2](https://github.com/5app/base5-ui/issues/2)) ([d2b5288](https://github.com/5app/base5-ui/commit/d2b5288))

## [1.14.18](https://github.com/5app/base5-ui/compare/v1.14.17...v1.14.18) (2019-06-27)


### Bug Fixes

* **publish:** Only run on master branch ([929ed34](https://github.com/5app/base5-ui/commit/929ed34))

## [1.14.17](https://github.com/5app/base5-ui/compare/v1.14.16...v1.14.17) (2019-06-27)


### Bug Fixes

* **publish:** Docs ([cdecaf4](https://github.com/5app/base5-ui/commit/cdecaf4))

## [1.14.16](https://github.com/5app/base5-ui/compare/v1.14.15...v1.14.16) (2019-06-27)


### Bug Fixes

* Fix docz publishing ([f9621a9](https://github.com/5app/base5-ui/commit/f9621a9))

## [1.14.15](https://github.com/5app/base5-ui/compare/v1.14.14...v1.14.15) (2019-06-27)


### Bug Fixes

* Deploy docs prior to versioning ([e0444bd](https://github.com/5app/base5-ui/commit/e0444bd))
* Fix docz publishing ([482e8a6](https://github.com/5app/base5-ui/commit/482e8a6))

## [1.14.14](https://github.com/5app/base5-ui/compare/v1.14.13...v1.14.14) (2019-06-13)


### Bug Fixes

* **deploy:** copy README to npm package ([6adc257](https://github.com/5app/base5-ui/commit/6adc257))

## [1.14.13](https://github.com/5app/base5-ui/compare/v1.14.12...v1.14.13) (2019-06-13)


### Bug Fixes

* **deploy:** tidy config semantic-release ([a0153b5](https://github.com/5app/base5-ui/commit/a0153b5))

## [1.14.12](https://github.com/5app/base5-ui/compare/v1.14.11...v1.14.12) (2019-06-13)


### Bug Fixes

* **deploy:** config semantic-release ([84d8ba2](https://github.com/5app/base5-ui/commit/84d8ba2))

## [1.14.11](https://github.com/5app/base5-ui/compare/v1.14.10...v1.14.11) (2019-06-13)


### Bug Fixes

* **deploy:** config semantic-release ([3949f41](https://github.com/5app/base5-ui/commit/3949f41))

## [1.14.8](https://github.com/5app/base5-ui/compare/v1.14.7...v1.14.8) (2019-06-13)


### Bug Fixes

* **deploy:** config semantic-release ([166e860](https://github.com/5app/base5-ui/commit/166e860))

## [1.14.7](https://github.com/5app/base5-ui/compare/v1.14.6...v1.14.7) (2019-06-13)


### Bug Fixes

* **deploy:** config semantic-release ([563b456](https://github.com/5app/base5-ui/commit/563b456))

## [1.14.6](https://github.com/5app/base5-ui/compare/v1.14.5...v1.14.6) (2019-06-12)


### Bug Fixes

* **deploy:** config semantic-release ([a18bee3](https://github.com/5app/base5-ui/commit/a18bee3))

## [1.14.5](https://github.com/5app/base5-ui/compare/v1.14.4...v1.14.5) (2019-06-12)


### Bug Fixes

* **deploy:** config semantic-release ([4fd2c27](https://github.com/5app/base5-ui/commit/4fd2c27))

## [1.14.4](https://github.com/5app/base5-ui/compare/v1.14.3...v1.14.4) (2019-06-12)


### Bug Fixes

* **deploy:** config semantic-release ([92bb80f](https://github.com/5app/base5-ui/commit/92bb80f))

## [1.14.3](https://github.com/5app/base5-ui/compare/v1.14.2...v1.14.3) (2019-06-12)


### Bug Fixes

* **tests:** trigger a build pass eslint tests ([76ef815](https://github.com/5app/base5-ui/commit/76ef815))

# [0.1.0](https://github.com/5app/base5-ui/compare/v0.0.6...v0.1.0) (2019-06-12)


### Features

* **auto-release:** Semantic release ([#2](https://github.com/5app/base5-ui/issues/2)) ([d2b5288](https://github.com/5app/base5-ui/commit/d2b5288))
