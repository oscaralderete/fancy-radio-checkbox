# fancy-radio-checkbox
Input radio/checkbox with switch style and extra customization option

This CSS is based on <a href="https://codepen.io/aaroniker/pen/ZEYoxEY" target="_blank">https://codepen.io/aaroniker/pen/ZEYoxEY</a>, I was adapting that on a daily work project when, suddendly, after some erratic modifications... whoa, that muted on this!
I'm a developer not a CSS guy, I'm sharing it because I think it could be useful to others, so if you have some complains about "semantic" or how I set CSS rules or whatever, now you know why...
<b>IMPORTANT!</b> There is a quirky behaviour on narrow screens and multiple option columns (as happens in this current page layout), the background image desplaces in an ugly way, this is because the CSS rules operate on &lt;label&gt; tag. I guess you can fix it wraping the &lt;input&gt; tag with a &lt;span&gt; and then applying the background image on the &lt;span&gt; tag, but it seems to overload the markup. Furthermore in my personal experience, most cases of forms containing options/checkboxes use a single column layout.
You can find a running version on <a href="https://experiments.oscaralderete.com/fancy-radio-checkbox/" target="_blank">https://experiments.oscaralderete.com/fancy-radio-checkbox/
