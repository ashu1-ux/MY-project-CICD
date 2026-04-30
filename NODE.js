body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #efefef;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.todo-card {
  width: 350px;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.todo-card h2 {
  text-align: center;
  margin-bottom: 15px;
}
.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.input-box input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
}
.input-box button {
  width: 40px;
  border: none;
  border-radius: 6px;
  background: #444;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
}
.item span {
  flex: 1;
}
.done {
  text-decoration: line-through;
  color: gray;
}
.item button {
  border: none;
  background: none;
  cursor: pointer;
}
.footer {
  margin-top: 10px;
  font-size: 12px;
  color: #777;
  text-align: center;
}
