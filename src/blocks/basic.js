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
        this.appendValueInput("env") //Value
             .setCheck("Environment")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Environment:");
        this.appendStatementInput("robot")
            .setCheck("Robot")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Robot(s):");
        this.appendStatementInput("tasks")
            .setCheck("Flow")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Tasks:");
        this.setColour(230);
        this.setTooltip("This is the startpoint for any mission");
        this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['mission_start'] = function(block) {
    var mission_name = Blockly.JavaScript.statementToCode(block, 'MISSIONNAME');
    var value_env = Blockly.JavaScript.valueToCode(block, 'env', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_robot = Blockly.JavaScript.statementToCode(block, 'robot');
    var statements_tasks = Blockly.JavaScript.statementToCode(block, 'tasks');

    // Removing surrounding "( )" from generated JSON
    if(value_env){
        value_env = value_env.slice(1, -1);
    }else{
        value_env = "null"
    }

    // Remove last "," from generated JSON
    if (statements_robot){
        statements_robot = statements_robot.slice(0, -2);
    }

    // Remove last "," from generated JSON
    if (statements_tasks){
        statements_tasks = statements_tasks.slice(0, -2);
    }

    var code = '{\n'
        + '"name": "' + mission_name + '",\n'
        + '"environment": ' + value_env + ",\n"
        + '"robots": [' + statements_robot + "],\n"
        + '"tasks": [' + statements_tasks + "]\n"
        + '}\n'
        ;

    // Converting generated code to JS object
    var obj = JSON.parse(code);
    // Returning a pretty printed JSON string
    return JSON.stringify(obj, null, 2);
  };