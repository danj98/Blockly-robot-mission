import * as Blockly from "blockly/core";

/**
 *  Block for parallel actions
 */
Blockly.Blocks['fork'] = {
    init: function() {
      this.appendStatementInput("Parallel tasks")
          .setCheck(["Flow", "Action"])
          .appendField("Fork");
      this.setPreviousStatement(true, ["Flow", "Action"]);
      this.setNextStatement(true, ["Flow", "Action"]);
      this.setColour(120);
   this.setTooltip("Allows actions in parallel");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "Flow"
    });
    }
};

Blockly.JavaScript['fork'] = function(block) {
    var statements_parallel_tasks = Blockly.JavaScript.statementToCode(block, 'Parallel tasks');
    var code = '{\n'
        + '"parallel_tasks": ['
        + statements_parallel_tasks 
        + ']\n'
        + '},\n'
    return code;
};

/**
 * Block for a sequence of actions
 */
Blockly.Blocks['sequence'] = {
    init: function() {
      this.appendStatementInput("Sequence")
          .setCheck(["Flow", "Action"])
          .appendField("Sequence");
      this.setPreviousStatement(true, ["Flow", "Action"]);
      this.setNextStatement(true, ["Flow", "Action"]);
      this.setColour(120);
   this.setTooltip("Represents a sequence of actions");
   this.setHelpUrl("");
   this.jsonInit({
    "type": "Flow"
    });
    }
};

Blockly.JavaScript['sequence'] = function(block) {
    var statements_sequence = Blockly.JavaScript.statementToCode(block, 'Sequence');
    var code = '{\n'
        + '"sequence": ['
        + statements_sequence 
        + ']\n'
        + '},\n'
    return code;
};