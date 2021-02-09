import * as Blockly from "blockly/core";

Blockly.Blocks["add_class"] = {
  init: function () {
    this.appendDummyInput().appendField("Add Class");
    this.appendValueInput("trigger_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("to");
    this.appendValueInput("action_class")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(
        new Blockly.FieldLabelSerializable("add class"),
        "add class"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip(null);
    this.setHelpUrl(null);
  }
};

Blockly.JavaScript["add_class"] = function (block) {
  var value_trigger_class = Blockly.JavaScript.valueToCode(
    block,
    "trigger_class",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_action_class = Blockly.JavaScript.valueToCode(
    block,
    "action_class",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$(.'" + value_trigger_class + "').addClass(.'" + value_action_class + "')";
  return code;
};
