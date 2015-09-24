# odoo_web_toggle
Odoo Backend bootstrap-toggle widget for boolean fields


Odoo Backend bootstrap-toggle widget for boolean fields

This works in odoo version 8 (and although I have not tested, probably 9).

In your xml view file simply define any boolean field as shown below.

<field name="myboolean" widget="bs_toggle" options="{}"/>

Most of the native bootstrap options are available. For complete documentation 
go to http://www.bootstraptoggle.com/

To unlock the styling and custom features bootstrap provides simply define them
in your options parameters.

<field name="myboolean" 
       widget="bs_toggle" 
       options="{
                 'data-on':'Yes',
                 'data-off':'No',
                 'data-onstyle':'primary',
                 'data-offstyle':'danger',
                 'data-size':'mini'
                 }"/>

There are many options available which can be found in the documentation at bootstrap's website
listed above.

Phillip

phillips@aimsystems.ca
