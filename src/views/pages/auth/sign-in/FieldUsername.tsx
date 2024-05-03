import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageAuthSignInFieldUsername: React.FC<MComponentUsecaseAuthSignIn.Field> = ({
    onChange
}): JSX.Element => {

    return (<FormControl width={"full"} isRequired={CUtilityString.forms.username.is_required}>
            <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
                {CUtilityString.forms.username.label}
            </FormLabel>
            <InputGroup>
                <InputLeftElement>
                    <Icon as={CUtilityString.forms.username.icon} fontSize={16} textColor={CUtilityColor.federal} />
                </InputLeftElement>
                <Input type="text" placeholder={CUtilityString.forms.username.placeholder}
                    onChange={(e) => onChange(e.target.value)} />
            </InputGroup>
        </FormControl>)
}

export default VPageAuthSignInFieldUsername