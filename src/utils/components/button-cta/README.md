# Button CTA

Generic Button CTA created with HTML.

## Usage

1.Add the following CSS stylesheets (all paths are relative to the root folder of the DDL):

```html
<!-- Base Styles for all components -->
<link rel="stylesheet" href="/styles/dist/base.css" />
<link rel="stylesheet" href="/styles/dist/typography.css" />
<link rel="stylesheet" href="/styles/dist/vars.css" />

Specific component styles
<link rel="stylesheet" href="/styles/dist/cta-icons.css" />
<link rel="stylesheet" href="/components/button-cta/dist/button-cta.css" />
```

2.Add the Button CTA component to your page (This is an example, you can get the markup for different variants and configurations directly from Storybook):

```html
<a href="#" class="ddl-button-cta ddl-button-cta--primary">
  <label>cta label</label><i class="ddl-cta-icon ddl-cta-icon--internal-link"></i>
</a>
```

## Button Types

Use ONE of these classes in the Button CTA root element to get a different Button CTA type
| CTA Type | Class
| ------ | :-----:
| Primary | ddl-button-cta--primary
| Secondary | ddl-button-cta--secondary
| Tertiary | ddl-button-cta--tertiary
| Reversed | ddl-button-cta--reversed

## Icon Variations

You can add ONE of the following icon classes to the `<i></i>` tag within the Button CTA:
| Icon Type | Class
| ------ | :-----:
| Internal Link | ddl-cta-icon--internal-link
| External Link | ddl-cta-icon--external-link
| Download | ddl-cta-icon--download
| Video | ddl-cta-icon--video
