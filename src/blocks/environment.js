import * as Blockly from "blockly/core";

// Block for describing the environment
Blockly.Blocks['environment'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Environment");
        this.appendDummyInput()
            .appendField("Size (m):")
            .appendField("x")
            .appendField(new Blockly.FieldNumber(0), "size_x")
            .appendField("y")
            .appendField(new Blockly.FieldNumber(0), "size_y");
        this.appendStatementInput("env_objects")
            //.setCheck("Env_objects")
            .appendField("Environment objects");
        this.setPreviousStatement(true, "Environment");
        this.setNextStatement(true, "Environment");
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
        //this.setOutput(true, "Environment");
    }
  };

  Blockly.JavaScript['environment'] = function(block) {
    var number_size_x = block.getFieldValue('size_x');
    var number_size_y = block.getFieldValue('size_y');
    var statements_env_objects = Blockly.JavaScript.statementToCode(block, 'env_objects');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n"environment": {\n"size_x": ' + number_size_x + ',\n"size_y": ' + number_size_y + ',\n"env_objects": [\n' + statements_env_objects + '\n]\n}\n}\n';
    return code;
  };

// Block for describing an environment object
Blockly.Blocks['env_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Environment object");
        this.appendDummyInput()
            .appendField("Name")
            .appendField(new Blockly.FieldTextInput(""), "name");
        this.appendDummyInput()
            .appendField("Scoutable")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "scoutable");
        this.appendDummyInput()
            .appendField("Position:")
            .appendField("x")
            .appendField(new Blockly.FieldNumber(0), "x")
            .appendField("y")
            .appendField(new Blockly.FieldNumber(0), "y");
        this.setPreviousStatement(true, ["Flow", "Action"]);
        this.setNextStatement(true, ["Flow", "Action"]);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
        //this.setOutput(true, "Env_objects");
    }
  };

  Blockly.JavaScript['env_object'] = function(block) {
    var text_name = block.getFieldValue('name');
    var checkbox_scoutable = block.getFieldValue('scoutable') === 'TRUE';
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = '{\n"name": "' + text_name + '",\n"scoutable": ' + checkbox_scoutable + ',\n"x": ' + number_x + ',\n"y": ' + number_y + '\n},\n';
    return code;
  };
