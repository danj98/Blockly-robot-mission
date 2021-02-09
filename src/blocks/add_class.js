import * as Blockly from "blockly/core";

Blockly.Blocks["add_class"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Add Class to")
      .appendField(new Blockly.FieldTextInput("class_name"), "class_name");
    this.appendStatementInput("NAME").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("Add Class");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["add_class"] = function (block) {
  var text_class_name = block.getFieldValue("class_name");
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = `${text_class_name}${statements_name}`;
  return code;
};
