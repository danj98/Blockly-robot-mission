import * as Blockly from "blockly/core";

// Block to move the robot to x and y coordinates
Blockly.Blocks['move_to_coords_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Move to:");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Robot:")
          .appendField(new Blockly.FieldTextInput(""), "robot");
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
          .appendField("Angle:")
          .appendField(new Blockly.FieldAngle(0), "theta");
      this.setInputsInline(true);
      //this.setOutput(true, "Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
   this.setTooltip("Move command with x and y coordinates and angle");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move_to_coords_input'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var number_coord_x = block.getFieldValue('coord_x');
    var number_coord_y = block.getFieldValue('coord_y');
    var angle_theta = block.getFieldValue('theta');
    var code = 'move_to_coords(\n' + 'robot: "' + text_robot + '",\nx:' + number_coord_x + ',\ny:' + number_coord_y + ',\nangle:' + angle_theta + ')\n';
    return code;
  };

// Block to turn the robot to a given angle
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
    }
  };

  Blockly.JavaScript['turn'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var angle_deg = block.getFieldValue('deg');
    var code = 'turn(\n' + 'robot: "' + text_robot + '",\nangle:' + angle_deg + ')\n';
    return code;
  };

// Block to search an area for an environment object
Blockly.Blocks['search_for_env_object'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("Search for object in area");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("Robot:")
          .appendField(new Blockly.FieldTextInput(""), "robot");
      this.appendDummyInput()
          .appendField("Environment object:")
          .appendField(new Blockly.FieldTextInput(""), "env_object");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_LEFT)
          .appendField("x1:")
          .appendField(new Blockly.FieldNumber(0), "x1")
          .appendField("y1:")
          .appendField(new Blockly.FieldNumber(0), "y1")
          .appendField("x2:")
          .appendField(new Blockly.FieldNumber(0), "x2")
          .appendField("y2:")
          .appendField(new Blockly.FieldNumber(0), "y2")
      this.setInputsInline(false);
      //this.setOutput(true, "Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(65);
   this.setTooltip("Search for a given object in a given area. The coordinates are opposing corners of a square area.");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['search_for_env_object'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var text_env_object = block.getFieldValue('env_object');
    var number_x1 = block.getFieldValue('x1');
    var number_y1 = block.getFieldValue('y1');
    var number_x2 = block.getFieldValue('x2');
    var number_y2 = block.getFieldValue('y2');
    var code = 'search_for_env_object(\n' + 'robot: "' + text_robot + '",\nobject:' + text_env_object + ',\nx1:' + number_x1 + ',\ny1:' + number_y1 + ',\nx2:' + number_x2 + ',\ny2:' + number_y2 + ')\n';
    return code;
  };

// Block to read the value of a LIDAR sensor
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
    }
  };

  Blockly.JavaScript['read_lidar'] = function(block) {
    var text_robot = block.getFieldValue('robot');
    var code = 'read_lidar(\n' + 'robot: "' + text_robot + '")\n';
    return code;
  };