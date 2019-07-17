import React, { Component } from 'react';
import TestImage from '../../components/TestImage/TestImage';

const code =
  'public class Fibonacci { public static void main(String[] args) { int n = 10, t1 = 0, t2 = 1; System.out.print("First " + n + " terms: "); for (int i = 1; i <= n; ++i) { System.out.print(t1 + " + "); int sum = t1 + t2; t1 = t2; t2 = sum; } } }';

class ResultPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>ResultPage</h2>

        {/* codeString - кусок кода */}
        {/* language - тип языка(cs - C#, babel - javascript, java - java */}
        <TestImage codeString={code} language="java" />
      </div>
    );
  }
}

export default ResultPage;
