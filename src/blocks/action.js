import * as Blockly from "blockly/core";

/**
 * Block to move the robot to x and y coordinates
 */
Blockly.Blocks['move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("robot")
          .appendField(new Blockly.FieldTextInput(""), "robot");
      this.appendDummyInput()
      .appendField("to:");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("x:")
          .appendField(new Blockly.FieldNumber(0), "coord_x");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("y:")
          .appendField(new Blockly.FieldNumber(0), "coord_y");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("angle:")
          .appendField(new Blockly.FieldAngle(0), "deg");
      this.setInputsInline(true);
      //this.setOutput(true, "Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
   this.setTooltip("Move command with x and y coordinates and angle");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "Action"
    });
    }
  };

  Blockly.JavaScript['move'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var number_coord_x = block.getFieldValue('coord_x');
    var number_coord_y = block.getFieldValue('coord_y');
    var angle_deg = block.getFieldValue('deg');
    var code = '{\n' + '"task_type": "move",\n"robot": "' + text_robot + '",\n"x":' + number_coord_x + ',\n"y":' + number_coord_y + ',\n"angle":' + angle_deg + '\n},\n';
    return code;
  };

/**
 * Block to turn the robot to a given angle
 */
Blockly.Blocks['turn'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Robot:")
          .appendField(new Blockly.FieldTextInput(""), "robot");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Turn:")
          .appendField(new Blockly.FieldAngle(0), "deg");
      this.setInputsInline(true);
      //this.setOutput(true, "Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
   this.setTooltip("Turn robot to given angle");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "Action"
    });
    }
  };

  Blockly.JavaScript['turn'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var angle_deg = block.getFieldValue('deg');
    var code = '{\n' + '"task_type": "turn",\n"robot": "' + text_robot + '",\n"angle":' + angle_deg + '\n},\n';
    return code;
  };

/**
 * Block to scout an area for an environment object
 */
Blockly.Blocks['scout'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("Scout for object in area");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("Robot:")
          .appendField(new Blockly.FieldTextInput(""), "robot");
      this.appendDummyInput()
          .appendField("Environment object:")
          .appendField(new Blockly.FieldTextInput(""), "target");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("left:")
          .appendField(new Blockly.FieldNumber(0), "left")
          .appendField("bottom:")
          .appendField(new Blockly.FieldNumber(0), "bottom")
          .appendField("right:")
          .appendField(new Blockly.FieldNumber(0), "right")
          .appendField("top:")
          .appendField(new Blockly.FieldNumber(0), "top")
      this.setInputsInline(false);
      //this.setOutput(true, "Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
   this.setTooltip("Search for a given object in a given area. The coordinates are opposing corners of a square area.");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "Action"
    });
    }
  };

  Blockly.JavaScript['scout'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var text_target = block.getFieldValue('target');
    var x1 = block.getFieldValue('x1');
    var y1 = block.getFieldValue('y1');
    var x2 = block.getFieldValue('x2');
    var y2 = block.getFieldValue('y2');
    var code = '{\n'
        + '"task_type" : "scout",\n'
        + '"robot":"' + text_robot + '",\n'
        + '"target": "' + text_target + '",\n'
        + '"area": {\n'
        + '"x1":' + x1 + ",\n"
        + '"y1":' + y1 + ",\n"
        + '"x2":' + x2 + ",\n"
        + '"y2":' + y2 + "\n"
        + '}\n'
        + '},\n'
    ;
    return code;
  };

/**
 * Block to read the value of a LIDAR sensor
 */
Blockly.Blocks['read_lidar'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Read Lidar");
        this.appendDummyInput()
            .appendField("Robot:")
            .appendField(new Blockly.FieldTextInput(""), "robot");
        //this.setOutput(true, "Action");
        this.setPreviousStatement(true, ["Action", "Flow"]);
        this.setNextStatement(true, ["Action", "Flow"]);
        this.setColour(65);
        this.setTooltip("Reads LIDAR data of robot");
        this.setHelpUrl("");
        this.jsonInit({
          "type": "Action"
          });
    }
  };

Blockly.JavaScript['read_lidar'] = function(block) {
  var text_robot = block.getFieldValue('robot');
  var code = '{\n' + '"task_type": "read_lidar",\n"robot": "' + text_robot + '"\n},\n';
  return code;
};

/**
 * Block to pick up a object in the environment
 */
Blockly.Blocks['pick_up'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Pick up")
          .appendField(new Blockly.FieldTextInput(""), "object");
      this.appendDummyInput()
          .appendField("Robot:")
          .appendField(new Blockly.FieldTextInput(""), "robot");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
      this.setTooltip("Pick up a object");
      this.setHelpUrl("");
      this.jsonInit({
        "type": "Action"
        });
  }
};

Blockly.JavaScript['pick_up'] = function(block) {
  var text_object = block.getFieldValue('object');
  var text_robot = block.getFieldValue('robot');
  var code = '{\n' + '"task_type": "pick_up",\n"target": "' + text_object + '",\n"robot": "' + text_robot + '"\n},\n';
  return code;
};
