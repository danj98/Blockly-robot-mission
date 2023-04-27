import * as Blockly from "blockly/core";

// Block for starting a mission
Blockly.Blocks['mission_start'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Mission start");
        this.appendStatementInput("env")
            //.setCheck("Env")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Environment:");
        this.appendStatementInput("robot")
            //.setCheck("Robot")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Robot(s):");
        this.appendStatementInput("tasks")
            //.setCheck(["Flow", "Action"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Tasks:");
        this.setColour(230);
        this.setTooltip("This is the startpoint for any mission");
        this.setHelpUrl("");
    }
  };
  
  

  Blockly.JavaScript['mission_start'] = function(block) {
    var statements_env = Blockly.JavaScript.statementToCode(block, 'env');
    var statements_robot = Blockly.JavaScript.statementToCode(block, 'robot');
    var statements_tasks = Blockly.JavaScript.statementToCode(block, 'tasks');
    // TODO: Assemble JavaScript into code variable.
    var code = '{ "mission_start": [\n' + statements_env + ',\n' + statements_robot + ',\n' + statements_tasks + '\n]\n}\n';
    return code;
  };