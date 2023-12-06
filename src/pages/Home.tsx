import { NavigationMenu } from "@/components/molecules/NavigationMenu"
import { RequestsSent } from "@/components/molecules/RequestsSent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Home = () => {
    return(
        <div className="flex self-stretch pb-4 flex-col items-end w-full h-screen overflow-hidden">
            <NavigationMenu/>
            {/* Map */}
            <div className="flex w-full bg-green-500 self-stretch h-full">
                Must have a map here
            </div>
            <div className="flex w-full p-4 flex-col items-center gap-2 h-full overflow-hidden">
                <Tabs defaultValue="rides" className="flex flex-col items-center h-full overflow-auto">
                    <TabsList className="flex w-min">
                        <TabsTrigger value="rides">Available Rides</TabsTrigger>
                        <TabsTrigger value="requests">Requests Sent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="rides" className="overflow-auto h-full">
                        <RequestsSent/>
                    </TabsContent>
                    <TabsContent value="requests">
                        todo
                    </TabsContent>
                </Tabs>
            </div>
            
        </div>
    )
}