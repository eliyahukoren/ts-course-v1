let EnumName;

(function (EnumName){
	EnumName["first"] = 'F'
	EnumName["second"] = 'S'
	EnumName["third"] = 'T'

})(EnumName || (EnumName = {}))

console.log(EnumName.first)
