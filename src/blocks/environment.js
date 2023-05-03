import * as Blockly from "blockly/core";

/**
 * Block for describing the environment
 */
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
            .setCheck("EnvironmentalObject")
            .appendField("Environment objects");
        this.setPreviousStatement(true, "Environment");
        this.setNextStatement(true, "Environment");
        this.setColour(260);
        this.setTooltip("An environment described by an area and a list of environmental objects");
        this.setHelpUrl("");
        //this.setOutput(true, "Environment");
        this.jsonInit({
            "type": "Environment"
            });
    }
  };

  Blockly.JavaScript['environment'] = function(block) {
    var number_size_x = block.getFieldValue('size_x');
    var number_size_y = block.getFieldValue('size_y');
    var statements_env_objects = Blockly.JavaScript.statementToCode(block, 'env_objects');
    var code = '{\n"size_x": ' + number_size_x + ',\n"size_y": ' + number_size_y + ',\n"env_objects": [\n' + statements_env_objects + '\n]\n}\n';
    return code;
  };

/**
 * Block for describing a scoutable object in the environment
 */
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
      this.setPreviousStatement(true, "EnvironmentalObject");
      this.setNextStatement(true, "EnvironmentalObject");
      this.setColour(0);
   this.setTooltip("An object that can be scouted/found in the environment");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "EnvironmentalObject"
    });
    }
};

Blockly.JavaScript['scoutableobject'] = function(block) {
    var text_objectname = block.getFieldValue('OBJECTNAME');
    var number_x_pos = block.getFieldValue('X_POS');
    var number_y_pos = block.getFieldValue('Y_POS');
    var code = '{\n'
        + '"environmental_object_type" : "ScoutableObject",\n'
        + '"id":' + text_objectname + ",\n"
        + '"x_position":' + number_x_pos + ",\n"
        + '"y_position":' + number_y_pos + "\n"
        + '}\n'
    ;
    return code;
};

/**
 * Block for describing an obstacle in the environment
 */
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
      this.setPreviousStatement(true, "EnvironmentalObject");
      this.setNextStatement(true, "EnvironmentalObject");
      this.setColour(0);
   this.setTooltip("An obstacle in the environment");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "EnvironmentalObject"
    });
    }
};

Blockly.JavaScript['obstacle'] = function(block) {
    var text_objectname = block.getFieldValue('OBJECTNAME');
    var number_x_pos = block.getFieldValue('X_POS');
    var number_y_pos = block.getFieldValue('Y_POS');
    var code = '{\n'
        + '"environmental_object_type" : "Obstacle",\n'
        + '"id":' + text_objectname + ",\n"
        + '"x_position":' + number_x_pos + ",\n"
        + '"y_position":' + number_y_pos + "\n"
        + '}\n'
    ;
    return code;
};
