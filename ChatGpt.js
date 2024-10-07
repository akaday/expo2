import React, { useState } from 'react';
import { TextInput, Button, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ChatGPT() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      const result = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: input,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_API_KEY`
        }
      });
      setResponse(result.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask ChatGPT..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" onPress={handleSend} />
      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  response: {
    marginTop: 12,
    fontSize: 16,
  },
});
