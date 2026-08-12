package com.example.expensetracker.controller;
import java.util.*;
import org.springframework.web.bind.annotation.*;
import com.example.expensetracker.entity.Expense;
import com.example.expensetracker.service.ExpenseService;
@RestController @RequestMapping("/expenses") public class ExpenseController{ExpenseService s; public ExpenseController(ExpenseService s){this.s=s;} @GetMapping public List<Expense> all(){return s.all();} @PostMapping public Expense add(@RequestBody Expense e){return s.save(e);}}