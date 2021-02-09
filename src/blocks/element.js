import * as Blockly from "blockly/core";
Blockly.Blocks["element"] = {
  init: function () {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("Buy Stock ID")
      .appendField(new Blockly.FieldNumber(0), "ID")
      .appendField("For amount")
      .appendField(new Blockly.FieldNumber(0), "Amount")
      .appendField("At Price")
      .appendField(new Blockly.FieldNumber(0), "Price");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["element"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = Blockly.JavaScript.valueToCode(
    block,
    "Number",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `hello(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};
