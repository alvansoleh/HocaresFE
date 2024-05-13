import { Box, Button, HStack, Icon, Spacer, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"
import { VComponentModal } from "views/components"

const VPageDashboardUserDelete: React.FC<MComponentUsecaseUser.Delete> = ({
    isOpen,
    loading,
    value,
    onClose,
    onDelete
}): JSX.Element => {

    return (<VComponentModal
        isOpen={isOpen}
        size="sm"
        title={CUtilityString.title.dashboard.user.delete}
        content={(<Box width={"full"}>
            {value !== undefined && (<Text fontSize={14} textColor={CUtilityColor.gray} dangerouslySetInnerHTML={{ 
                __html: CUtilityString.messages.dashboard.user.delete(value.full_name)
            }}  />)}
        </Box>)}
        footer={(<HStack width={"full"}>
            <Spacer />
            <Button 
                leftIcon={<Icon as={CUtilityString.buttons.action.delete.icon} />}
                width={"fit-content"}
                colorScheme="red"
                isLoading={loading}
                isDisabled={loading}
                onClick={onDelete}>{CUtilityString.buttons.action.delete.text}</Button>
        </HStack>)}
        onClose={onClose} />)
}

export default VPageDashboardUserDelete