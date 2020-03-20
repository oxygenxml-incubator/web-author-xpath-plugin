goog.events.listen(workspace, sync.api.Workspace.EventType.EDITOR_LOADED, function(e) {
  var editor = e.editor;
  var editingSupport = editor.getEditingSupport();
  if (editingSupport.getType() === sync.api.Editor.EditorTypes.AUTHOR) {
    var xpathEvaluator = {};
    wgxpath.install({document: xpathEvaluator});
  
    editingSupport.evaluateXPathAtSelection = function(expr, nsProvider, resultType) {
      var nodeAtSelection = editingSupport.getSelectionManager().getSelection().getNodeAtSelection();
      return xpathEvaluator.evaluate(expr, nodeAtSelection, nsProvider, resultType);
    };
    
    editingSupport.evaluateXPath = function(expr, nsProvider, resultType) {
      return xpathEvaluator.evaluate(expr, editingSupport.getDocument(), nsProvider, resultType);
    };
  }  
});
