import * as Blockly from "blockly/core";

Blockly.Blocks["mouse_event"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("On")
      .appendField(
        new Blockly.FieldDropdown([
          ["click", "click"],
          ["mouseover", "mouseover"],
          ["mouseout", "mouseover"]
        ]),
        "on"
      )
      .appendField("into");
    this.appendValueInput("into").setCheck(null);
    this.appendStatementInput("NAME").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip("Add Class");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["mouse_event"] = function (block) {
  var dropdown_on = block.getFieldValue("on");
  var value_into = Blockly.JavaScript.valueToCode(
    block,
    "into",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code =
    "$('." +
    value_into +
    "').on('" +
    dropdown_on +
    "', function() {\n" +
    statements_name +
    "\n});";
  return code;
};
