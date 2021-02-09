import * as Blockly from "blockly/core";

Blockly.Blocks["element"] = {
  init: function () {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("element")
      .appendField(
        new Blockly.FieldDropdown([
          ["class", "."],
          ["id", "#"]
        ]),
        "element"
      )
      .appendField(new Blockly.FieldTextInput("class_name"), "class_name");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["element"] = function (block) {
  var dropdown_element = block.getFieldValue("element");
  var text_class_name = block.getFieldValue("class_name");
  var value_number = Blockly.JavaScript.valueToCode(
    block,
    "Number",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `${dropdown_element}${text_class_name}${value_number}`;
  return code;
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
