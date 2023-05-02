import * as Blockly from "blockly/core";

/**
 *  Block for parallel actions
 */
Blockly.Blocks['fork'] = {
    init: function() {
      this.appendStatementInput("Parallel tasks")
          .setCheck(null)
          .appendField("Fork");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("Allows actions in parallel");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['fork'] = function(block) {
    var statements_parallel_tasks = Blockly.JavaScript.statementToCode(block, 'Parallel tasks');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n'
        + '"parallel_tasks": ['
        + statements_parallel_tasks 
        + ']\n'
        + '}\n'
    return code;
};

/**
 * Block for a sequence of actions
 */
Blockly.Blocks['sequence'] = {
    init: function() {
      this.appendStatementInput("Sequence")
          .setCheck(null)
          .appendField("Sequence");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['sequence'] = function(block) {
    var statements_sequence = Blockly.JavaScript.statementToCode(block, 'Sequence');
    // TODO: Assemble JavaScript into code variable.
    var code = '{\n'
        + '"task_sequence": ['
        + statements_sequence 
        + ']\n'
        + '}\n'
    return code;
};