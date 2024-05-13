import { Box, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceBuildingBodyChoose: React.FC<MComponentUsecasePlaceBuilding.BodyChoose> = ({
    items,
    onChoose
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`building-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={4}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_gedung}</Text></Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Pilih Gedung'>
                            <IconButton aria-label={CUtilityString.buttons.action.choose.text} icon={<Icon as={CUtilityString.buttons.action.choose.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onChoose(it)} />
                        </Tooltip>
                    </HStack>
                </Box>
            </HStack>)
        }) : (<Box
            width={"full"}
            borderTop={"1px solid rgba(0,0,0,0.1)"}
            paddingTop={2}>
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.places.building.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardPlaceBuildingBodyChoose