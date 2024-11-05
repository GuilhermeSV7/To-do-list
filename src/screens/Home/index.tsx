import React, {useState} from "react";

import { styles } from "./style";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Tarefa } from '../../components/Tarefa/index'

export default function Home(){
    const [tarefas, setTarefas] = useState<string[]>([]);
    const [tarefaName, setTarefaName] = useState('');

    function handleTarefaAdd(){

        if(tarefas.includes(tarefaName)){
          return Alert.alert("Tarefa Existe","Ja existe um Tarefa com esse nome na lista");
        }
    
        setTarefas(prevState => [...prevState, tarefaName]);
        setTarefaName('');
    }
    
      function handleTarefaRemove(name: string){;
    
        Alert.alert("Remover", `Remover Participante ${name}`, [
          {
            text: 'Sim',
            onPress : () => setTarefas(prevState => prevState.filter(tarefa => tarefa !== name))
          },
          {
            text: 'Nao',
            style: "cancel"
          }
          ])
      }
    
        return(
        <View style={styles.container}>
            <Text style={styles.text}>TODO</Text>

            <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova Tarefa"
                placeholderTextColor={"#6B6B6B"}
                onChangeText={setTarefaName}
                value={tarefaName}
            />
            <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>

            </View>

            <FlatList
                data={tarefas}
                keyExtractor={item => item}
                renderItem={({item}) => (
            <Tarefa 
                key={item}
                name={item}
                onRemove={() => handleTarefaRemove(item)}
            />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmpty}>
                    Adicione Novas tarefas
                </Text>
  )}
  />
    </View>       
    );
}