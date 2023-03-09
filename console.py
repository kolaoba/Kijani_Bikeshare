import cmd
import shlex
from models.engine.db_storage import classes
import models
from models import storage


class KijaniCommand(cmd.Cmd):
    """This is the class definition for the command interpreter"""
    prompt = "(kijani) "

    def do_quit(self, line):
        """This command quits the command interpreter"""
        return True

    def help_quit(self):
        """This gives more information about the quit command"""
        print("Quit command to exit the program\n")

    def do_EOF(self, line):
        """This exits the program"""
        return True

    def help_EOF(self):
        """This gives more information about the quit command"""
        print("This is the end of file\n")

    # def emptyline(self):
        """Does nothing"""
        # pass

    def _key_value_parser(self, args):
        """creates a dictionary from a list of strings"""
        new_dict = {}
        for arg in args:
            if "=" in arg:
                kvp = arg.split('=', 1)
                key = kvp[0]
                value = kvp[1]
                if value[0] == value[-1] == '"':
                    value = shlex.split(value)[0].replace('_', ' ')
                else:
                    try:
                        value = int(value)
                    except BaseException:
                        try:
                            value = float(value)
                        except BaseException:
                            continue
                new_dict[key] = value
        return new_dict

    def do_create(self, arg):
        """Creates an instance"""
        args = arg.split()
        if len(args) == 0:
            print("Class name missing!")
            return False
        if args[0] in classes:
            new_dict = self._key_value_parser(args[1:])
            if args[0] == 'User':
                city = storage.get_obj_by_attr(classes.get('City'), 'name',new_dict.get('city_name'))
                new_dict["city_id"] = city.id
                new_dict.pop("city_name")
            if args[0] == 'Area':
                city = storage.get_obj_by_attr(classes.get('City'), 'name',new_dict.get('city_name'))
                new_dict["city_id"] = city.id
                new_dict.pop("city_name")
            if args[0] == "Station":
                area = storage.get_obj_by_attr(classes.get('Area'), 'name',new_dict.get('area_name'))
                new_dict["area_id"] = area.id
                new_dict.pop("area_name")
            print(new_dict)
            instance = classes[args[0]](**new_dict)
        else:
            print("class does not exist!")
            return False
        print(instance.id)
        instance.save()

    def do_show(self, arg):
        """Prints an instance as a string based on the class and id"""
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            if len(args) > 1:
                key = args[0] + "." + args[1]
                if key in models.storage.all(classes[args[0]]):
                    print(models.storage.all(classes[args[0]])[key])
                else:
                    print("** no instance found **")
            else:
                print("** instance id missing **")
        else:
            print("** class doesn't exist **")

    def do_destroy(self, arg):
        """Deletes an instance based on the class and id"""
        args = shlex.split(arg)
        if len(args) == 0:
            print("** class name missing **")
        elif args[0] in classes:
            if len(args) > 1:
                key = args[0] + "." + args[1]
                if key in models.storage.all(classes[args[0]]):
                    popped = models.storage.all(classes[args[0]]).pop(key)
                    print(popped)
                    print(type(models.storage.all(classes[args[0]])))
                    print(models.storage.all(classes[args[0]]))
                    models.storage.save()
                else:
                    print("** no instance found **")
            else:
                print("** instance id missing **")
        else:
            print("** class doesn't exist **")

    def do_all(self, arg):
        """Prints string representations of instances"""
        args = shlex.split(arg)
        obj_list = []
        if len(args) == 0:
            obj_dict = models.storage.all()
        elif args[0] in classes:
            obj_dict = models.storage.all(classes[args[0]])
        else:
            print("** class doesn't exist **")
            return False
        for key in obj_dict:
            obj_list.append(str(obj_dict[key]))
        print("[", end="")
        print(", ".join(obj_list), end="")
        print("]")

    def do_update(self, arg):
        args = shlex.split(arg)
        if len(args) == 0:
            print('** class name missing **')
            return False
        if args[0] not in classes:
            print("** class doesn't exist **")
            return False
        if len(args) == 1:
            print('** instance id missing **')
            return False
        key = args[0] + "." + args[1]
        model = models.storage.all(classes[args[0]])
        if key not in model:
            print('** no instance found **')
            return False
        if len(args) == 2:
            print('** attribute name missing **')
        if len(args) == 3:
            print('** value missing **')

        if len(args) >= 4 and key in model.keys():
            new_attribute = model[key].to_dict()
            attribute_key = args[2]
            attribute_value = args[3]
            new_attribute[attribute_key] = attribute_value
            setattr(model[key], args[2], args[3])
            model[key].save()


if __name__ == '__main__':
    KijaniCommand().cmdloop()
