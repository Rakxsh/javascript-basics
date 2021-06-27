







function getUserRole(name, role){

    switch(role){
        case "admin":
            return ` ${name} Access  everything `;
            break;

             case "subadmin":
            return ` ${name} Access sub of everything `;
            break;

            case "user":
                return ` ${name} content of everything `;
                break;
    default:
        return `${name} trial user`;
        break;

    }

}
console.log(getUserRole("Ajay", "user"));

var getRole = getUserRole("Balaji", "subadmin");
console.log(getRole);
