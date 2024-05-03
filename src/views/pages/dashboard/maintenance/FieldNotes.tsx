import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMaintenanceFormNotes: React.FC<MComponentUsecaseMaintenance.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.notes.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.notes.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.notes.placeholder}
                value={value?.catatan || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            catatan: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardMaintenanceFormNotes