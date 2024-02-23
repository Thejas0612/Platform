# Text CTA
Generic Text CTA created with HTML.

## Usage
1.Add the following CSS stylesheets (all paths are relative to the root folder of the DDL):

```html
<!-- Base Styles for all components -->
<link rel="stylesheet" href="/styles/dist/vars.css">
<link rel="stylesheet" href="/styles/dist/base.css">
<link rel="stylesheet" href="/styles/dist/typography.css">

<!-- Specific component styles -->
<link rel="stylesheet" href="/styles/dist/cta-icons.css">
<link rel="stylesheet" href="/components/text-cta/dist/text-cta.css">
```

2.Add the Text CTA component to your page (This is an example, you can get the markup for different variants and configurations directly from Storybook):

```html
<a href="javascript:void(0)" class="ddl-text-cta ddl-text-cta--primary ">
    <label>cta text</label><i class="ddl-cta-icon ddl-cta-icon--internal-link"></i>
</a>
```

## Text CTA types
Use ONE of these classes in the Text CTA root element to get a different Text CTA type
| Text CTA Type | Class
| ------ | :-----:
| Primary | ddl-text-cta--primary
| Secondary | ddl-text-cta--secondary
| Reversed | ddl-text-cta--reversed

## Icon Variations
You can add ONE of the following icon classes to the ```<i></i>``` tag within the Text CTA:
| Icon Type | Class
| ------ | :-----:
| Internal Link | ddl-cta-icon--internal-link
| External Link | ddl-cta-icon--external-link
| Download | ddl-cta-icon--download
| Video | ddl-cta-icon--video
