---
lang: zh-CN
title: Java String 字符串详解
description: 讲述 String 的结构、JVM 中的存储方式以及关联的信息
tag: 
  - Java
  - String
date: 2023-12-16
sticky: true
category: Java
cover: /assets/images/minions_cover15.jpg
icon: ant-design:field-string-outlined
isOriginal: true
---

## 引子

相信每个 Javaer 都遇到这么一个问题，`String abc = new String("123");`，其作为八股文已经是老生常谈的问题，考究的是大伙对对象以及字符串在 JVM 中的存储理解。本篇文章就来深入研究下 String 方方面面的问题。

## String 内部结构

- char[] value
- 不可变是否真的不可变？
- 8 / 9 的变化
- 是否线程安全

## String 在 JVM 中的存储方式

- 堆（字符串对象）
- 元空间（字符串常量池）
- intern 的理解

## String 的 hash 算法

- 看看是否有必要吧，感觉这个有点说法

## StringBuilder 与 StringBuffer

- 两者对比
- String 中如何默认使用的 StringBuilder