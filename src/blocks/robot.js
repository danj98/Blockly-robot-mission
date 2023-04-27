import * as Blockly from "blockly/core";

// Block for robot definition
Blockly.Blocks['robot'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Robot name:")
            .appendField(new Blockly.FieldTextInput(""), "robot_name");
        this.appendDummyInput()
            .appendField("Robot type:")
            .appendField(new Blockly.FieldDropdown([["Flying","flying"], ["Ground","ground"]]), "robot_type");
        this.appendDummyInput()
            .appendField("Starting position")
            .appendField(new Blockly.FieldLabelSerializable("x:"), "x_text")
            .appendField(new Blockly.FieldNumber(0), "x")
            .appendField(new Blockly.FieldLabelSerializable("y:"), "y_text")
            .appendField(new Blockly.FieldNumber(0), "y")
            .appendField(new Blockly.FieldLabelSerializable("Angle:"), "angle_text")
            .appendField(new Blockly.FieldAngle(0), "Angle");
        this.setPreviousStatement(true, "Robot");
        this.setNextStatement(true, "Robot");
        this.setColour(160);
        this.setTooltip("A robot with its characteristics");
        this.setHelpUrl("");
        //this.setOutput(true, "Robot");
    }
  };

  Blockly.JavaScript['robot'] = function(block) {
    var text_robot_name = block.getFieldValue('robot_name');
    var dropdown_robot_type = block.getFieldValue('robot_type');
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var angle_angle = block.getFieldValue('Angle');
    var code = '{ "name": "' + text_robot_name + '",\n"robot_type": "' + dropdown_robot_type + '",\n"starting_pos": [\nx: ' + number_x + ',\ny: ' + number_y + ',\ntheta: ' + angle_angle + '\n]\n}\n';
    return code;
  };