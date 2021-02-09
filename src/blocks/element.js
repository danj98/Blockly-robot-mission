import * as Blockly from "blockly/core";

Blockly.Blocks["element"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("class")
      .appendField(new Blockly.FieldTextInput("class"), "class");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["element"] = function (block) {
  var text_class = block.getFieldValue("class");
  var code = text_class;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*

Blockly.Blocks["element"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("element")
      .appendField(
        new Blockly.FieldDropdown([
          ["class", "."],
          ["id", "#"]
        ]),
        "element"
      )
      .appendField(new Blockly.FieldTextInput("class-name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["element"] = function (block) {
  var dropdown_element = block.getFieldValue("element");
  var text_name = block.getFieldValue("NAME");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "...";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
*/
