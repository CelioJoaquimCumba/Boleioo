import { NavigationMenu } from "@/components/molecules/NavigationMenu"
import { Requests } from "@/components/molecules/Requests"
import {  Rides } from "@/components/molecules/Rides"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Home = () => {
    return(
        <div className="flex self-stretch pb-16 flex-col items-end w-full h-[calc(100dvh)]  overflow-hidden">
            <NavigationMenu/>
            {/* Map */}
            <div className="flex flex-col md:flex-row-reverse w-full h-full px-4">
                <div className="flex w-full bg-gray-200 rounded-md self-stretch h-full text-black">
                    Must have a map here
                </div>
                <div className="flex w-full p-4  flex-col items-center gap-2 h-full md:max-w-sm overflow-hidden">
                    <Tabs defaultValue="rides" className="flex flex-col items-center h-full overflow-auto w-full">
                        <TabsList className="flex w-min">
                            <TabsTrigger value="rides">Available Rides</TabsTrigger>
                            <TabsTrigger value="requests">Requests Sent</TabsTrigger>
                        </TabsList>
                        <TabsContent value="rides" className="flex w-full overflow-auto">
                            <Rides/>
                        </TabsContent>
                        <TabsContent value="requests" className="flex w-full overflow-auto overflow-x-hidden">
                            <Requests/>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            
        </div>
    )
}