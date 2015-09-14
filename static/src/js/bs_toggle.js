openerp.web_toggle = function(instance, local) {
    var _t = instance.web._t,
        _lt = instance.web._lt;
    var QWeb = instance.web.qweb;

local.FieldBooleanToggle = instance.web.form.AbstractField.extend({
    template: 'FieldBooleanToggle',
    start: function() {
        var self = this;
        this.$checkbox = $("input", this.$el);
        this.setupFocus(this.$checkbox);
        this.$el.click(_.bind(function() {
            this.$checkbox.bootstrapToggle('toggle');
            this.internal_set_value(this.$checkbox.is(':checked'));
        }, this));
        var check_readonly = function() {
            self.$checkbox.prop('disabled', self.get("effective_readonly"));
            self.click_disabled_boolean();
        };
        this.on("change:effective_readonly", this, check_readonly);
        check_readonly.call(this);
        this._super.apply(this, arguments);
    },
    render_value: function() {
        this.$checkbox[0].checked = this.get('value');
        if (this.get('value')){
            this.$checkbox.bootstrapToggle({ on: 'Yes', off: 'No' });
            this.set('data-size','mini');
            this.$checkbox.bootstrapToggle('on');
        } else {
            this.$checkbox.bootstrapToggle({ on: 'Yes', off: 'No' });
            this.set('data-size','mini');
            this.$checkbox.bootstrapToggle('off');
            
        }
    },
    focus: function() {
        var input = this.$checkbox && this.$checkbox[0];
        return input ? input.focus() : false;
    },
    click_disabled_boolean: function(){
        var $disabled = this.$el.find('input[type=checkbox]:disabled');
        $disabled.each(function (){
            $(this).next('div').remove();
            $(this).closest("span").append($('<div class="boolean"></div>'));
        });
    }
});
instance.web.form.widgets.add('bs_toggle','instance.web_toggle.FieldBooleanToggle');
}
