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
    var code = '{\n"size_x": ' + number_size_x + ',\n"size_y": ' + number_size_y + ',\n"env_objects": [\n' + statements_env_objects + '\n]\n}\n';
    return code;
  };

// Block for describing an environment object
Blockly.Blocks['scoutableobject'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Scoutable object");
      this.appendDummyInput()
          .appendField("name")
          .appendField(new Blockly.FieldTextInput("Object name"), "OBJECTNAME");
      this.appendDummyInput()
          .appendField("position")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(0), "X_POS")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(0), "Y_POS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['scoutableobject'] = function(block) {
    var text_objectname = block.getFieldValue('OBJECTNAME');
    var number_x_pos = block.getFieldValue('X_POS');
    var number_y_pos = block.getFieldValue('Y_POS');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n'
        + '"environmental_object_type" : "ScoutableObject",\n'
        + '"id":' + text_objectname + ",\n"
        + '"x_position":' + number_x_pos + ",\n"
        + '"y_position":' + number_y_pos + "\n"
        + '}\n'
    ;
    return code;
};

Blockly.Blocks['obstacle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Obstacle");
      this.appendDummyInput()
          .appendField("name")
          .appendField(new Blockly.FieldTextInput("Object name"), "OBJECTNAME");
      this.appendDummyInput()
          .appendField("position")
          .appendField("x")
          .appendField(new Blockly.FieldNumber(0), "X_POS")
          .appendField("y")
          .appendField(new Blockly.FieldNumber(0), "Y_POS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['obstacle'] = function(block) {
    var text_objectname = block.getFieldValue('OBJECTNAME');
    var number_x_pos = block.getFieldValue('X_POS');
    var number_y_pos = block.getFieldValue('Y_POS');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n'
        + '"environmental_object_type" : "Obstacle",\n'
        + '"id":' + text_objectname + ",\n"
        + '"x_position":' + number_x_pos + ",\n"
        + '"y_position":' + number_y_pos + "\n"
        + '}\n'
    ;
    return code;
};
