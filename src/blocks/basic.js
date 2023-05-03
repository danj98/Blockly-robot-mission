import * as Blockly from "blockly/core";

/**
 * Block for starting a mission
 */
Blockly.Blocks['mission_start'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Mission start");
        this.appendDummyInput()
            .appendField("Name:")
            .appendField(new Blockly.FieldTextInput(), "MISSIONNAME");
        this.appendStatementInput("env")
             .setCheck("Environment")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Environment:");
        this.appendStatementInput("robot")
            .setCheck("Robot")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Robot(s):");
        this.appendStatementInput("tasks")
            .setCheck(["Flow", "Action"]) // Maybe just Flow
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Tasks:");
        this.setColour(230);
        this.setTooltip("This is the startpoint for any mission");
        this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['mission_start'] = function(block) {
    var mission_name = Blockly.JavaScript.statementToCode(block, 'MISSIONNAME');
    var statements_env = Blockly.JavaScript.statementToCode(block, 'env');
    var statements_robot = Blockly.JavaScript.statementToCode(block, 'robot');
    var statements_tasks = Blockly.JavaScript.statementToCode(block, 'tasks');

    var code = '{\n'
        + '"name": "' + mission_name + '",\n'
        + '"environment": ' + statements_env + ",\n"
        + '"robots": ' + statements_robot + ",\n"
        + '"tasks": ' + statements_tasks + "\n"
        + '}\n'
        ;
    return code;
  };