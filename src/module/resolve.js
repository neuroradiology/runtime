import Variable from "../variable/index";

export default function module_resolve(name) {
  var variable = this._scope.get(name) || this._runtime._scope.get(name);
  if (!variable) {
    variable = new Variable(this);
    variable._id = -1; // TODO Better indication of undefined variables?
    variable._name = name;
    this._scope.set(name, variable);
  }
  return variable;
}
