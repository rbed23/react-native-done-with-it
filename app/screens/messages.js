import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        title: 'title',
        description: 'desc',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'title',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        image: require('../assets/mosh.jpg')
    },
]

function Messages() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={(arg) => 
                    <ListItem
                        title={arg.item.title}
                        subTitle={arg.item.description}
                        image={arg.item.image}
                        showChevrons={true}
                        onPress={() => console.log('item pressed: ', arg.item)}
                        swipeRight={()=> 
                            <ListItemDeleteAction
                                onPress={() => handleDelete(arg.item)}
                            />
                        }
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => 
                    setMessages([...messages, {id: 3, title: 'test_refresh'}])}
                
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
});

export default Messages;