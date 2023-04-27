import * as Blockly from "blockly/core";

// Block for parallel actions
Blockly.Blocks['parallel_actions'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Parallel actions");
      this.appendStatementInput("actions1")
          .setCheck("action")
          .appendField("Actions 1:");
      this.appendStatementInput("actions2")
          .setCheck("action")
          .appendField("Actions 2:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("Allows actions in parallel");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['parallel_actions'] = function(block) {
    var statements_actions1 = Blockly.JavaScript.statementToCode(block, 'actions1');
    var statements_actions2 = Blockly.JavaScript.statementToCode(block, 'actions2');
    var code = '{ "parallel_actions": [\n' + statements_actions1 + ',\n' + statements_actions2 + '\n]\n}\n';
    return code;
  };

// Block for a sequence of actions
Blockly.Blocks['sequence'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sequence");
      this.appendStatementInput("sequence")
          .setCheck("Action");
      this.setPreviousStatement(true, ["Action", "Flow"]);
      this.setNextStatement(true, ["Action", "Flow"]);
      this.setColour(120);
   this.setTooltip("Allows a sequence of actions as input");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['sequence'] = function(block) {
    var statements_sequence = Blockly.JavaScript.statementToCode(block, 'sequence');
    var code = '{ "sequence": [\n' + statements_sequence + '\n]\n}\n';
    return code;
  };